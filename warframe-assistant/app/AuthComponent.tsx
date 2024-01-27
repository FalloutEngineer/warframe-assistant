import React from "react"

import styles from "./auth.module.css"
import Link from "next/link"

export default function AuthComponent() {
  return (
    <div className={styles.auth}>
      <div className={styles.authWrapper}>
        <h2 className={styles.authText}>Login</h2>
        <form className={styles.authForm}>
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
            className={styles.authInput}
            required
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
            className={styles.authInput}
            required
          />

          <button type="submit" className={styles.authSubmit}>
            Login
          </button>
        </form>

        <p className={"regularText " + styles.authRegister}>
          Don&apos;t have account?{" "}
          <Link className="regularLink" href="/register">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  )
}
