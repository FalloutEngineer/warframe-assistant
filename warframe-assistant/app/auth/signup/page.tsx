"use client"

import React, { use, useRef, useState } from "react"

import styles from "../auth.module.css"
import Link from "next/link"
import toast, { Toaster } from "react-hot-toast"
import { signIn } from "next-auth/react"
import { UserValidationResult } from "@/lib/authTypes"

export default function SignUp() {
  const email = useRef("")
  const password = useRef("")
  const passwordRepeat = useRef("")

  const acceptedRules = useRef(false)

  const [emailHighlight, emailHighlightChange] = useState(false)
  const [passwordHighlight, passwordHighlightChange] = useState(false)
  const [passwordRepeatHighlight, passwordRepeatHighlightChange] =
    useState(false)

  async function onSubmit() {
    emailHighlightChange(false)
    passwordHighlightChange(false)
    passwordRepeatHighlightChange(false)

    const user = {
      email: email.current,
      password: password.current,
    }

    const validationResult = preValidation(user)

    let response

    if (acceptedRules.current) {
      if (user.password === passwordRepeat.current) {
        if (validationResult.success) {
          response = await sendRegistrationRequest(user)
        } else {
          response = {
            status: 200,
            validation: validationResult,
          }
        }

        if (response) {
          if (response.validation.success) {
            toast.success("Successfull registration")

            const signInResult = await signIn("credentials", {
              email: user.email,
              password: user.password,
              redirect: false,
              callbackUrl: "/",
            })

            if (signInResult) {
              if (signInResult.error) {
                toast.error("Login error. Please try again later")
              } else {
                window.location.replace(signInResult.url!)
              }
            }
          } else {
            switch (response.validation.message) {
              case "credentials_error":
                toast.error("Credentials error")
                if (!response.validation.emailOK) {
                  emailHighlightChange(true)
                }
                if (!response.validation.passwordOK) {
                  passwordHighlightChange(true)
                  passwordRepeatHighlightChange(true)
                }

                break
              case "account_exists":
                toast.error("Account already exists")
                break
              default:
                toast.error("Something went wrong")
                break
            }
          }
        }
      } else {
        toast.error("Passwords are not same")
        passwordHighlightChange(true)
        passwordRepeatHighlightChange(true)
      }
    } else {
      toast.error("Rules is not accepted")
    }
  }

  function preValidation(user: { email: string; password: string }) {
    const result: UserValidationResult = {
      success: false,
      emailOK: false,
      passwordOK: false,
      message: "credentials_error",
    }

    const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g

    if (user.email.match(emailRegexp)) {
      result.emailOK = true
    }
    if (user.password.match(passwordRegexp)) {
      result.passwordOK = true
    }

    if (result.emailOK && result.passwordOK) {
      result.success = true
      result.message = "success"
    }

    return result
  }

  async function sendRegistrationRequest(user: {
    email: string
    password: string
  }) {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })

    const response = await res.json()

    return response
  }

  return (
    <div className={styles.auth}>
      <Toaster />
      <div className={styles.authWrapper}>
        <h2 className={styles.authText}>Registration</h2>
        <div className={styles.authForm}>
          <label
            className={styles.authLabel + " " + styles.labelRequired}
            htmlFor="emailReg"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="emailReg"
            placeholder="example@mail.com"
            className={
              (emailHighlight ? styles.invalid : "") + " " + "input-outline"
            }
            required
            onChange={(e) => {
              email.current = e.target.value
            }}
          />
          <label
            className={styles.authLabel + " " + styles.labelRequired}
            htmlFor="passwordReg"
          >
            Password
          </label>
          <p className={styles.fieldDescription}>
            Password must be 8 characters long, have one lowercase letter, one
            uppercase letter and one number
          </p>
          <input
            type="password"
            name="passwordReg"
            id="passwordReg"
            className={
              (passwordHighlight ? styles.invalid : "") + " " + "input-outline"
            }
            required
            onChange={(e) => {
              password.current = e.target.value
            }}
          />

          <label
            className={styles.authLabel + " " + styles.labelRequired}
            htmlFor="passwordReg"
          >
            Repeat Password
          </label>

          <input
            type="password"
            name="repeatPassword"
            id="repeatPasswordReg"
            className={
              (passwordRepeatHighlight ? styles.invalid : "") +
              " " +
              "input-outline"
            }
            required
            onChange={(e) => {
              passwordRepeat.current = e.target.value
            }}
          />

          <label className={styles.rulesLabel} htmlFor="acceptRulesReg">
            <input
              className={"checkbox " + styles.registerCheckbox}
              type="checkbox"
              name="acceptRulesReg"
              id="acceptRulesReg"
              onChange={(e) => {
                acceptedRules.current = e.target.checked
              }}
            />
            <p>
              I&apos;m accepting the{" "}
              <Link className="regularLink" href="/rules">
                rules
              </Link>
            </p>
          </label>

          <button
            className="button-submit"
            onClick={() => {
              onSubmit()
            }}
          >
            Register
          </button>
        </div>

        <p className={"regularText " + styles.authRegister}>
          Already have account?{" "}
          <Link className="regularLink" href="/auth/signin">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  )
}
