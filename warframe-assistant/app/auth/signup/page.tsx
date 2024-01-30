"use client"

import React from "react"

import styles from "../auth.module.css"
import Link from "next/link"
import toast, { Toaster } from "react-hot-toast"

export default function SignUp() {
  async function onSubmit() {
    // const response = await trySignUp({
    //   email: "dmin@example.com",
    //   password: "passwOrd1",
    // })

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "admin@example.com",
        password: "passwOrd1",
      }),
    })

    const response = await res.json()

    console.log(response)

    if (response) {
      if (response.validation.success) {
        toast.success("Successfull registration")
        // redirect
      } else {
        switch (response.validation.message) {
          case "credentials_error":
            toast.error("Credentials error")
            //Highlight wrong field(s)
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
  }

  // if (result) {
  //   if (result?.error) {
  //     if (result?.status === 401) {
  //       toast.error("Login error. Please check your credentials")
  //     } else {
  //       toast.error("Login error. Please try again later")
  //     }
  //   } else {
  //     window.location.replace(result.url!)
  //   }
  // }

  return (
    <div className={styles.auth}>
      <Toaster />
      <div className={styles.authWrapper}>
        <h2 className={styles.authText}>Registration</h2>
        <form className={styles.authForm}>
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
            className="input-outline"
            required
          />
          <label
            className={styles.authLabel + " " + styles.labelRequired}
            htmlFor="passwordReg"
          >
            Password
          </label>
          <input
            type="password"
            name="passwordReg"
            id="passwordReg"
            className="input-outline"
            required
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
            className="input-outline"
            required
          />

          <label className={styles.rulesLabel} htmlFor="acceptRulesReg">
            <input
              className={"checkbox " + styles.registerCheckbox}
              type="checkbox"
              name="acceptRulesReg"
              id="acceptRulesReg"
            />
            <p>
              I&apos;m accepting the{" "}
              <Link className="regularLink" href="/rules">
                rules
              </Link>
            </p>
          </label>

          <button
            type="submit"
            className="button-submit"
            onClick={() => {
              onSubmit()
            }}
          >
            Register
          </button>
        </form>

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
