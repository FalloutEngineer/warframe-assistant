"use client"
import React, { useRef } from "react"

import { signIn } from "next-auth/react"

import styles from "../auth.module.css"
import Link from "next/link"

import toast, { Toaster } from "react-hot-toast"
import { redirect, useRouter } from "next/navigation"

export default function SignIn() {
  const router = useRouter()
  const email = useRef("")
  const password = useRef("")

  async function onSubmit() {
    const result = await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: false,
      callbackUrl: "/",
    })

    if (result) {
      if (result?.error) {
        if (result?.status === 401) {
          toast.error("Login error. Please check your credentials")
        } else {
          toast.error("Login error. Please try again later")
        }
      } else {
        window.location.replace(result.url!)
      }
    }
  }

  return (
    <div className={styles.auth}>
      <div className={styles.authWrapper}>
        <h2 className={styles.authText}>Login</h2>
        <div className={styles.authForm}>
          <label
            className={styles.authLabel + " " + styles.labelRequired}
            htmlFor="emailLogin"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="emailLogin"
            placeholder="example@mail.com"
            className="input-outline"
            required
            onChange={(e) => {
              email.current = e.target.value
            }}
          />
          <label
            className={styles.authLabel + " " + styles.labelRequired}
            htmlFor="passwordLogin"
          >
            Password
          </label>
          <input
            type="password"
            name="passwordLogin"
            id="passwordLogin"
            className="input-outline"
            required
            onChange={(e) => {
              password.current = e.target.value
            }}
          />

          <button onClick={onSubmit} className="button-submit">
            Login
          </button>
        </div>

        <p className={"regularText " + styles.authRegister}>
          Don&apos;t have account?{" "}
          <Link className="regularLink" href="/auth/signup">
            Register
          </Link>{" "}
        </p>
      </div>
      <Toaster />
    </div>
  )
}
