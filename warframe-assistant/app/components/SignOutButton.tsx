"use client"

import React from "react"

import { signOut } from "next-auth/react"

import styles from "./header.module.css"

export default function SignOutButton() {
  return (
    <button
      onClick={() => {
        signOut()
      }}
      className="button-outline"
    >
      Sign Out
    </button>
  )
}
