import React from "react"

import styles from "../auth.module.css"
import Link from "next/link"

export default function SignUp() {
  return (
    <div className={styles.auth}>
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

          <button type="submit" className="button-submit">
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
