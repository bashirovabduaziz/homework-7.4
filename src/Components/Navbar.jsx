import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import logo from "../../public/logo.svg"

const Navbar = () => {
  const image =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM2IiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTM2IDMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNjQ3OF80ODYpIj4KPHBhdGggZD0iTTI2LjgxNTYgMTcuOTAyNUMyNi44NDU1IDE4LjkyNDkgMjcuMDMxMiAxOS44NTI3IDI3LjMzNzEgMjAuNzQ5OUMyOC4yNDI4IDIzLjQwNzMgMjkuODg3OCAyNS40MDggMzIuNTU2NiAyNi40NDU0QzM0LjM4MTYgMjcuMTU0NyAzNi4yNTY0IDI3LjIwNzQgMzguMTQwNCAyNi43MDY1QzQwLjE0ODIgMjYuMTcyOSA0MS43OTMyIDI1LjA5ODUgNDIuOTM5NCAyMy4zMzQ3QzQzLjE1NzggMjIuOTk4OSA0My4zMDUxIDIyLjYxODMgNDMuNTA3OSAyMi4yNzExQzQzLjU2ODMgMjIuMTY3OSA0My43MDUgMjIuMDQyIDQzLjgwODEgMjIuMDQwNUM0NC44Mzk4IDIyLjAyNDkgNDUuODcxNCAyMi4wMzM0IDQ2LjkwMjQgMjIuMDM3QzQ2LjkzNTggMjIuMDM3IDQ2Ljk2OTMgMjIuMDU3NiA0Ny4wNTYxIDIyLjA4NTRDNDYuOTcyMSAyMi4zNjI5IDQ2LjkwMSAyMi42NDQ2IDQ2LjgwMjggMjIuOTE1QzQ1LjU3MjYgMjYuMjkzOCA0My4xMjU4IDI4LjM3NDkgMzkuNzM5MSAyOS4zNTY4QzM2Ljg0NDEgMzAuMTk1NyAzMy45MzMzIDMwLjE3MzYgMzEuMDgzMSAyOS4wOTkyQzI4LjA0NzkgMjcuOTU0NSAyNS44OCAyNS44NjI3IDI0LjU1OCAyMi45MTM1QzIzLjQwNzYgMjAuMzQ3MiAyMy4xMzI5IDE3LjY1NTYgMjMuNTQyIDE0Ljg4M0MyMy45NjI1IDEyLjAzNjMgMjUuMTM1OCA5LjU2NTk4IDI3LjIyOSA3LjU2OTU0QzI4LjgxOTEgNi4wNTI2NCAzMC43MDk2IDUuMDc3MTkgMzIuODU5IDQuNjM2NzdDMzUuOTA3IDQuMDEyMDkgMzguODYxOCA0LjI5ODExIDQxLjYyMzggNS43ODI5OUM0NC45NjY0IDcuNTc5NSA0Ni45NTcyIDEwLjM5ODQgNDcuNjM1OSAxNC4xMjUyQzQ3Ljg0NjUgMTUuMjgwNyA0Ny44OTE0IDE2LjQ1NjggNDcuNzczMyAxNy42MzM2QzQ3Ljc1NCAxNy44MjcxIDQ3LjY4NzkgMTcuOTEwMyA0Ny40OTE1IDE3LjkwNDdDNDcuMjMxMSAxNy44OTYxIDQ2Ljk3IDE3LjkwMzIgNDYuNzA4OSAxNy45MDMyQzQwLjIyMjIgMTcuOTAzMiAzMy43MzU1IDE3LjkwMzIgMjcuMjQ4OSAxNy45MDMySDI2LjgxNDlMMjYuODE1NiAxNy45MDI1Wk00NC4zNTc0IDE1LjE0MjZDNDMuOTA0MiAxMC41OTA1IDM5Ljg3MTQgNi44OTkzMSAzNC45ODM1IDcuMjY0MzFDMzAuMDYgNy42MzE0NCAyNy4zNTkyIDExLjc0MzkgMjYuOTQ4NiAxNS4xNDI2SDQ0LjM1NzRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTAzLjE3OCAzMEMxMDAuNTQxIDI5LjkxMDQgOTguMDk5OCAyOS4yNjkzIDk1Ljk0MDQgMjcuNzM3NUM5My41MDc4IDI2LjAxMjEgOTEuOTkzOCAyMy42NDg1IDkxLjMwMTUgMjAuNzY3QzkwLjU0MzggMTcuNjEyMiA5MC42OTE3IDE0LjQ5NDUgOTIuMDA4NyAxMS41MDk4QzkzLjY3MDggNy43NDEwMyA5Ni41NzY1IDUuNDU4NTYgMTAwLjYyMiA0LjY3Mzc5QzEwMy41MTEgNC4xMTMxNCAxMDYuMzE1IDQuNDIwNSAxMDguOTU2IDUuNzUxN0MxMTIuMDg1IDcuMzI4MzYgMTE0LjA3MyA5Ljg3OTc3IDExNS4wMDMgMTMuMjI4OEMxMTUuODgyIDE2LjM5NDIgMTE1Ljc2NiAxOS41NTI1IDExNC40OTMgMjIuNTk2MkMxMTIuOTIyIDI2LjM1MjIgMTEwLjEwNiAyOC42OTk0IDEwNi4xMjUgMjkuNTg1MkMxMDUuMTYgMjkuODAwMSAxMDQuMTYyIDI5Ljg2NTUgMTAzLjE3OSAzMEgxMDMuMTc4Wk0xMTIuMSAxNy4xNzExQzExMi4xMDggMTUuNzE5NyAxMTEuODQ5IDE0LjMyMjMgMTExLjI5OSAxMi45NzY5QzEwOS43NTcgOS4yMDQ1NiAxMDYuMTUgNy4wMjEgMTAyLjExOCA3LjUzMDQyQzk4LjUwNDYgNy45ODcyIDk2LjE1MzIgMTAuMDQ4NCA5NC45MDI0IDEzLjQwNDVDOTQuMDgzNCAxNS42MDA5IDk0LjA0MjkgMTcuODYxMyA5NC42MzkxIDIwLjExNTNDOTUuMTgxMyAyMi4xNjQ0IDk2LjI0MjggMjMuOTA3NSA5Ny45NjY3IDI1LjE4NjFDMTAwLjA3OCAyNi43NTIxIDEwMi40NTQgMjcuMTk5NiAxMDUuMDA2IDI2LjcwMDhDMTA3LjAxIDI2LjMwODggMTA4LjY1MSAyNS4yNzI5IDEwOS45MjUgMjMuNjc3N0MxMTEuNDQ1IDIxLjc3NzMgMTEyLjA4NyAxOS41Nzc0IDExMi4xIDE3LjE3MTFaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTIwLjU5MiA0Ljg4NDUyVjcuNzI1NUMxMjAuNjgxIDcuNjY1NzMgMTIwLjcyNSA3LjY1MDc5IDEyMC43NDggNy42MTk0OUMxMjIuNjA1IDUuMTIwMDIgMTI1LjE1OCA0LjIwMTQ5IDEyOC4xNzggNC4zNzM2N0MxMjkuODExIDQuNDY2ODcgMTMxLjMxNCA0Ljk2MjA3IDEzMi42MjcgNS45NjI0MkMxMzQuMTIxIDcuMTAwODEgMTM1LjA0OCA4LjYyNTUzIDEzNS40NTggMTAuNDMyQzEzNS42ODkgMTEuNDUyMyAxMzUuODM3IDEyLjUxNDUgMTM1Ljg0NSAxMy41NTlDMTM1Ljg4NCAxOC42OTMxIDEzNS44NjQgMjMuODI3MiAxMzUuODYzIDI4Ljk2MjFDMTM1Ljg2MyAyOS4wODk0IDEzNS44NSAyOS4yMTY4IDEzNS44NDEgMjkuMzY2MkMxMzUuNzExIDI5LjM3NDcgMTM1LjYwNyAyOS4zODc1IDEzNS41MDMgMjkuMzg3NUMxMzQuNjM4IDI5LjM4OSAxMzMuNzcyIDI5LjM3NTQgMTMyLjkwNyAyOS4zOTU0QzEzMi42MTEgMjkuNDAyNSAxMzIuNTQ3IDI5LjI5NDMgMTMyLjU1MSAyOS4wMjY4QzEzMi41NjQgMjguMTk3MiAxMzIuNTU2IDI3LjM2NjkgMTMyLjU1NiAyNi41MzY2QzEzMi41NTYgMjIuMzI3NCAxMzIuNTU2IDE4LjExNzUgMTMyLjU1NiAxMy45MDg0QzEzMi41NTYgMTIuNTg5MiAxMzIuMzQ2IDExLjMxNDMgMTMxLjczMyAxMC4xMjgyQzEzMC42MTYgNy45NjUyNyAxMjguNTQxIDcuMDUzODUgMTI2LjI4MyA3LjIxMzIyQzEyMy4xOTcgNy40MzA5NCAxMjEuMTY3IDkuNjk3NzUgMTIwLjczMSAxMi41ODA3QzEyMC42MzggMTMuMTk5IDEyMC41OTUgMTMuODMwMSAxMjAuNTk0IDE0LjQ1NjJDMTIwLjU4MyAxOS4yNzAxIDEyMC41ODggMjQuMDg0OCAxMjAuNTg4IDI4Ljg5ODdWMjkuMzg5QzEyMC40MiAyOS4zODkgMTIwLjMwNSAyOS4zODkgMTIwLjE5IDI5LjM4OUMxMTkuNTM4IDI5LjM4OSAxMTguODg2IDI5LjM4OSAxMTguMjM0IDI5LjM4OUMxMTcuNTk5IDI5LjM4OSAxMTcuMjgxIDI5LjA3NjYgMTE3LjI4MSAyOC40NTI2QzExNy4yODEgMjAuNzU3MiAxMTcuMjgxIDEzLjA2MTcgMTE3LjI4MiA1LjM2NjJDMTE3LjI4MiA1LjA0NTMxIDExNy40NDIgNC44ODUyMyAxMTcuNzYzIDQuODg1MjNDMTE4LjY4NiA0Ljg4NTIzIDExOS42MDkgNC44ODUyMyAxMjAuNTkzIDQuODg1MjNMMTIwLjU5MiA0Ljg4NDUyWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTY4LjAwMTQgMjkuMzc0OEg2NC43NDQyQzY0LjczNTcgMjkuMjE1NCA2NC43MjE0IDI5LjA2NjcgNjQuNzIxNCAyOC45MThDNjQuNzIgMjMuOTM3NiA2NC43MzE0IDE4Ljk1NzEgNjQuNzEzNiAxMy45NzZDNjQuNzA3OSAxMi40NTU1IDY0LjQ2NDYgMTAuOTczNSA2My42MDg3IDkuNjY1MDhDNjIuMzc0MiA3Ljc3ODkyIDYwLjU2OTkgNy4wNjUyOSA1OC4zODkyIDcuMjIxODJDNTUuMjQ0NCA3LjQ0NzM2IDUzLjI1MjkgOS43ODg4OCA1Mi44NDk1IDEyLjcyMzFDNTIuNzcwNSAxMy4yOTU4IDUyLjczOTIgMTMuODc5OSA1Mi43Mzg1IDE0LjQ1ODRDNTIuNzI5MyAxOS4yOTY1IDUyLjczIDI0LjEzNDcgNTIuNzM4NSAyOC45NzI4QzUyLjczODUgMjkuMjg1MSA1Mi42NzQ1IDI5LjQwNzUgNTIuMzMwOCAyOS4zOTY4QzUxLjUwMTkgMjkuMzcwNSA1MC42NzA5IDI5LjM2OTggNDkuODQxMyAyOS4zOTY4QzQ5LjQ5NDggMjkuNDA4MiA0OS40MzUxIDI5LjI3OTQgNDkuNDM1MSAyOC45NzE0QzQ5LjQ0MjIgMjMuMTYwNiA0OS40NCAxNy4zNDk5IDQ5LjQ0IDExLjUzOTFDNDkuNDQgOS40NTIzNCA0OS40NDY0IDcuMzY0ODMgNDkuNDMzNiA1LjI3ODAzQzQ5LjQzMTUgNC45NjcxIDQ5LjUxMTIgNC44NjgyMSA0OS44MjkyIDQuODc2MDNDNTAuNjgyMyA0Ljg5NzM4IDUxLjUzNjggNC44OTI0IDUyLjM4OTkgNC44Nzc0NkM1Mi42NTAzIDQuODczMTkgNTIuNzQzNSA0Ljk0NTA1IDUyLjczODUgNS4yMTYxM0M1Mi43MjM2IDUuOTk4NzcgNTIuNzM0MiA2Ljc4MTQxIDUyLjczNzEgNy41NjQwNEM1Mi43MzcxIDcuNjA4MTYgNTIuNzU0MiA3LjY1MjI3IDUyLjc3NTUgNy43NTQwMUM1Mi45NDQ4IDcuNTM1NTkgNTMuMDc1OCA3LjM0OTE3IDUzLjIyMzcgNy4xNzc3MUM1NS4wODY0IDUuMDIwNDcgNTcuNDg5OCA0LjIwNzk0IDYwLjI3MzIgNC4zNjQ0N0M2MS43MDQ3IDQuNDQ0ODcgNjMuMDUzIDQuODI3NjUgNjQuMjYzOSA1LjYwODE2QzY1Ljk5OTMgNi43MjczMyA2Ny4wNTMgOC4zNDE3IDY3LjU4OCAxMC4zMTMyQzY3Ljg5NzUgMTEuNDUzMSA2OC4wMDUgMTIuNjE3MSA2OC4wMDM1IDEzLjc5NjdDNjcuOTk3OCAxOC44NjA0IDY4LjAwMTQgMjMuOTI0MSA2OC4wMDE0IDI4Ljk4N1YyOS4zNzM0VjI5LjM3NDhaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjUuMjcwNyA0LjkwNzAzQzI1LjA3MjkgNS40MTcxNyAyNC44OTAxIDUuODk5NTYgMjQuNjk5NCA2LjM3OTgxQzIyLjMzMDEgMTIuMzU1NiAxOS45NjAyIDE4LjMzMDcgMTcuNTkwOSAyNC4zMDU4QzE2Ljk1NDEgMjUuOTExNyAxNi4zMTM4IDI3LjUxNjggMTUuNjg3NyAyOS4xMjY5QzE1LjYwODcgMjkuMzI5NyAxNS41MDg0IDI5LjM5MyAxNS4yOTkyIDI5LjM5MjNDMTMuNTIwNSAyOS4zODU5IDExLjc0MTcgMjkuMzg1MiA5Ljk2MyAyOS4zOTQ0QzkuNzMzMTkgMjkuMzk1OCA5LjYzMzU4IDI5LjMxMDQgOS41NTI0NyAyOS4xMDQxQzcuMTQ5MDYgMjMuMDE1MiA0LjczOTk1IDE2LjkyODQgMi4zMzAxMyAxMC44NDIzQzEuNjEwODEgOS4wMjU4NSAwLjg4NTgwNiA3LjIxMjI2IDAuMTY1MDY2IDUuMzk2NTNDMC4xMDUzMDEgNS4yNDU3IDAuMDU5MDUzNyA1LjA4OTE3IDAgNC45MTU1N0MwLjEwMjQ1NSA0LjkwMjA1IDAuMTcwNzU4IDQuODg1NjggMC4yMzk3NzIgNC44ODU2OEMxLjE2NDcxIDQuODgzNTUgMi4wODk2NSA0Ljg3NTAxIDMuMDE0NTkgNC44OTQ5M0MzLjEzOTgxIDQuODk3NzggMy4zMzMzMyA1LjAxNzMxIDMuMzc2NzMgNS4xMjkwMUM0Ljg5MDc5IDkuMDIzNzEgNi4zODk5IDEyLjkyNDEgNy44OTE4NSAxNi44MjMxQzkuMDg3ODcgMTkuOTI2NiAxMC4yODYgMjMuMDI5NCAxMS40NzYzIDI2LjEzNTFDMTEuNTYxNyAyNi4zNTg1IDExLjY3OTEgMjYuNDQzOCAxMS45MjEgMjYuNDMzOUMxMi4zOTQ5IDI2LjQxNDcgMTIuODcwMiAyNi40MTI1IDEzLjM0MzMgMjYuNDMzOUMxMy41ODg4IDI2LjQ0NTMgMTMuNjk0MSAyNi4zNTcgMTMuNzc5NCAyNi4xMzM2QzE0Ljk2OTEgMjMuMDI4IDE2LjE2NzkgMTkuOTI1MiAxNy4zNjQ2IDE2LjgyMjRDMTguODU0NSAxMi45NTc1IDIwLjM0NjUgOS4wOTI3MyAyMS44Mjc4IDUuMjI0MzVDMjEuOTIzMiA0Ljk3NTMzIDIyLjAzNjMgNC44NzI4OCAyMi4zMTAyIDQuODc3ODZDMjMuMTg3NSA0Ljg5NDIyIDI0LjA2NTUgNC44ODM1NSAyNC45NDI3IDQuODg0OTdDMjUuMDM1OSA0Ljg4NDk3IDI1LjEyODQgNC44OTcwNyAyNS4yNzE0IDQuOTA3MDNIMjUuMjcwN1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik03My4zMTggMC4wMDE0MjI5OEM3My4zMTggMC4xODY0MTEgNzMuMzE4IDAuMzE0NDc5IDczLjMxOCAwLjQ0MjU0N0M3My4zMTggMS42OTk3NSA3My4zMTIzIDIuOTU2OTUgNzMuMzIwOCA0LjIxNDE2QzczLjMyNTggNC45NDY5OSA3My4xNzcxIDQuODgxNTQgNzQuMDA4OCA0Ljg4Mjk2Qzc1Ljc4NzUgNC44ODY1MiA3Ny41NjYzIDQuODg0MzggNzkuMzQ1IDQuODg0MzhDNzkuNDgzNyA0Ljg4NDM4IDc5LjYyMjUgNC44ODQzOCA3OS43ODU0IDQuODg0MzhDNzkuNzk1NCA1LjA0NDQ3IDc5LjgwODIgNS4xNjA0NCA3OS44MDgyIDUuMjc2NDFDNzkuODA5NiA2IDc5Ljc5NjggNi43MjM1OSA3OS44MTM5IDcuNDQ2NDZDNzkuODIwMyA3LjcyNjc5IDc5LjczMzUgNy44MTUwMSA3OS40NTEgNy44MTI4OEM3Ny43NTU1IDcuODAyMjEgNzYuMDU5MyA3LjgwNzkgNzQuMzYzOCA3LjgwODYxQzc0LjEyNjkgNy44MDg2MSA3My44ODg2IDcuODIzNTUgNzMuNjUyMyA3LjgwNTA1QzczLjM4MzQgNy43ODM3MSA3My4zMDg3IDcuODg3NTggNzMuMzEyMyA4LjE1MTU1QzczLjMyNTggOS4zMTM0MSA3My4zMTg3IDEwLjQ3NiA3My4zMTg3IDExLjYzODZDNzMuMzE4NyAxNS41NDExIDczLjMxNTggMTkuNDQyOSA3My4zMjI5IDIzLjM0NDdDNzMuMzIyOSAyMy43MjE4IDczLjMzNzkgMjQuMTEwMyA3My40MjYxIDI0LjQ3MzlDNzMuNzExNCAyNS42NDkyIDc0LjU4MyAyNi4zNTc5IDc1LjgzOTUgMjYuNDA1NkM3Ni45NjQzIDI2LjQ0ODIgNzguMDkyMSAyNi40MzgzIDc5LjIxODMgMjYuNDIxMkM3OS41NzIgMjYuNDE1NSA3OS42NjQ0IDI2LjUzMzYgNzkuNjU0NSAyNi44NjhDNzkuNjMzOSAyNy41Nzg4IDc5LjYzNzQgMjguMjkxNyA3OS42NTM4IDI5LjAwMjVDNzkuNjYwMiAyOS4yODY0IDc5LjU5MTIgMjkuMzk4OCA3OS4yODEgMjkuMzk0NUM3Ny45NDEyIDI5LjM3NDYgNzYuNjAwOCAyOS40MDMxIDc1LjI2MSAyOS4zNjc1Qzc0LjM1NTMgMjkuMzQzMyA3My40NzMxIDI5LjE0NDggNzIuNjU1NiAyOC43MzcxQzcxLjE2NzggMjcuOTk2NCA3MC4zNzQ1IDI2Ljc0OTIgNzAuMTI5OCAyNS4xMzkxQzcwLjA0NzkgMjQuNjAyNiA3MC4wMjA5IDI0LjA1MzQgNzAuMDIwOSAyMy41MDk4QzcwLjAxMzggMTUuODM1NiA3MC4wMTU5IDguMTYyMjIgNzAuMDE1OSAwLjQ4ODA4M0M3MC4wMTU5IDAuMTYyOTMxIDcwLjE3MzkgMC4wMDA3MTE0OTEgNzAuNDg5OCAwQzcxLjQxMjYgMCA3Mi4zMzU0IDAgNzMuMzE4IDBWMC4wMDE0MjI5OFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik04OS4xMTU3IDI5LjM3Mkg4NS44Mzg2Qzg1LjgzODYgMjkuMjA2OSA4NS44Mzg2IDI5LjA1NjEgODUuODM4NiAyOC45MDUzQzg1LjgzOTMgMjEuOTgyNSA4NS44Mzg2IDE1LjA1OSA4NS44NDc4IDguMTM2MTVDODUuODQ3OCA3Ljg0OTQyIDg1Ljc0NCA3LjgwNDU5IDg1LjQ5ODUgNy44MDYwMkM4NC4zMjUzIDcuODE0NTYgODMuMTUxMyA3Ljc5OTYxIDgxLjk3ODggNy44MTY2OUM4MS42NjY0IDcuODIwOTYgODEuNTY2OCA3LjcyOTg5IDgxLjU3NDYgNy40MTYxMkM4MS41OTM5IDYuNTkwMDggODEuNTgxIDUuNzYyNjIgODEuNTgxIDQuOTA3NDFDODEuNzM2OSA0Ljg5ODE2IDgxLjg1MTQgNC44ODYwNiA4MS45NjYgNC44ODYwNkM4NC4yMTc4IDQuODg1MzUgODYuNDY5NyA0Ljg5MTc1IDg4LjcyMTYgNC44Nzg5NUM4OS4wNDMyIDQuODc2ODEgODkuMTQwNiA0Ljk2MDA2IDg5LjE0MDYgNS4yOTIzMkM4OS4xMzE0IDEzLjE5OTEgODkuMTMyOCAyMS4xMDU5IDg5LjEzMjEgMjkuMDEzNEM4OS4xMzIxIDI5LjExOCA4OS4xMjI4IDI5LjIyMjYgODkuMTE1IDI5LjM3MjdMODkuMTE1NyAyOS4zNzJaIiBmaWxsPSJibGFjayIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzY0NzhfNDg2Ij4KPHJlY3Qgd2lkdGg9IjEzNS44NjgiIGhlaWdodD0iMzAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";

  const [count, setCount] = useState(false);
  const [count1, setCount1] = useState(false);
  const [count2, setCount2] = useState(false);


  const handleMouseOver = () => {
    setCount(true);
  };

  const handleMouseOut = () => {
    setCount(false);
  };
  const handleMouseOver1 = () => {
    setCount1(true);
  };

  const handleMouseOut1 = () => {
    setCount1(false);
  };
  const handleMouseOver2 = () => {
    setCount2(true);
  };

  const handleMouseOut2 = () => {
    setCount2(false);
  };

  return (
    <div id="uzbb" className=" bg-white container mx-auto">
      <div id="uzb" className="uzb flex justify-between fixed px-4 bg-white  z-20 ">
        <div className="py-4 cursor-pointer">
          <img id="logos" className="pr-[392px]" src={image} alt="logo img" />
          <img id="logo" className="hidden pr-[392px]" src={logo} alt="logo img" />

        </div>
        <div className="flex items-center gap-8 cursor-pointer">
          <div
            className="flex items-center border-l-2 py-4 px-7 gap-2 transition duration-1000 ease-out"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <h1 className="text-[20] font-medium">What we do</h1>
            <IoIosArrowDown
              className={count ? "rotate-180 transition-all duration-1000" : "transition-all duration-1000"}
            />
          </div>
          <div className="flex items-center px-7">
            <h1 className="text-[20] font-medium">Portfolio</h1>
          </div>
          <div className="flex items-center px-7">
            <h1 className="text-[20] font-medium">Insights</h1>
          </div>
          <div
            className="flex items-center px-7 gap-2 py-4"
            onMouseOver={handleMouseOver1}
            onMouseOut={handleMouseOut1}
          >
            <h1 className="text-[20] font-medium">About us</h1>
            <IoIosArrowDown
              className={count1 ? "rotate-180 transition" : "transition"}
            />
          </div>
          <button className="px-10 text-[20] h-full bg-red-500 hover:text-white transition hover:bg-[#550028] font-medium">
            Contact us
          </button>
          <div
            className="px-7"
            onMouseOver={handleMouseOver2}
            onMouseOut={handleMouseOut2}
          >
            <RiGlobalLine id="globe" className="w-8 h-8" />
          </div>
        </div>
      </div>

      {count && (
        <div className=" flex transition-all duration-1000  bg-transparent z-10 w-full fixed top-16">
          <div className="w-[560px] backdrop-blur-[25px]"></div>
          <div id="drop"
            className="w-[66%] bg-[#ebebee] border-l-2 border-slate-200 pb-10 "
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="flex p-10 gap-32 border-b-2">
              <div className="w-24">
                <h1 className="text-2xl text-[#290d1a]">Services</h1>
              </div>
              <div>
                <h1 className=" underline text-xl font-medium mb-3">
                  Software development
                </h1>
                <h1 className=" underline text-xl font-medium">
                  Web debelopment
                </h1>
              </div>
              <div>
                <h1 className=" underline text-xl font-medium mb-3">
                  Mobail app development
                </h1>
                <h1 className=" underline text-xl font-medium">
                  IT sevices for startup
                </h1>
              </div>
            </div>
            <div className="flex p-10 gap-32 border-b-2">
              <div>
                <h1 className="text-2xl text-[#290d1a]">Industries</h1>
              </div>
              <div className="w-48">
                <h1 className=" underline text-xl font-medium mb-3">fintich</h1>
                <h1 className=" underline text-xl font-medium mb-3">
                  Helthteach
                </h1>
                <h1 className=" underline text-xl font-medium mb-3">Edtech</h1>
                <h1 className=" underline text-xl font-medium mb-3">Gamedov</h1>
              </div>
              <div>
                <h1 className=" underline text-xl font-medium mb-3">
                  Real estate
                </h1>
                <h1 className=" underline text-xl font-medium mb-3">
                  Ecommercy
                </h1>
                <h1 className=" underline text-xl font-medium mb-3">
                  Marketing/adtech
                </h1>
              </div>
            </div>
            <div className="flex p-10 gap-32 pb-16">
              <div>
                <h1 className="text-2xl text-[#290d1a]">Industries</h1>
              </div>
              <div className="w-48">
                <h1 className=" underline text-xl font-medium mb-3">fintich</h1>
                <h1 className=" underline text-xl font-medium mb-3">
                  Helthteach
                </h1>
                <h1 className=" underline text-xl font-medium mb-3">Edtech</h1>
                <h1 className=" underline text-xl font-medium mb-3">Gamedov</h1>
              </div>
              <div>
                <h1 className=" underline text-xl font-medium mb-3">
                  Real estate
                </h1>
                <h1 className=" underline text-xl font-medium mb-3">
                  Ecommercy
                </h1>
                <h1 className=" underline text-xl font-medium mb-3">
                  Marketing/adtech
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
      {count1 && (
        <div className=" flex transition-all duration-1000  bg-transparent z-10 w-full fixed top-16">
          <div className="w-[560px] backdrop-blur-[25px]"></div>
          <div id="drop"
            className="w-[66%] bg-[#ebebee] border-l-2 border-slate-200 pb-12 "
            onMouseOver={handleMouseOver1}
            onMouseOut={handleMouseOut1}
          >
            <div className="flex p-10 gap-32 border-b-2">
              <div className="w-24">
                <h1 className="text-2xl text-[#290d1a]">Company</h1>
              </div>
              <div>
                <h1 className=" underline text-xl font-medium mb-3">
                  Software development
                </h1>
                <h1 className=" underline text-xl font-medium">
                  Web debelopment
                </h1>
              </div>
              <div>
                <h1 className=" underline text-xl font-medium mb-3">
                  Mobail app development
                </h1>
                <h1 className=" underline text-xl font-medium">
                  IT sevices for startup
                </h1>
              </div>
            </div>
            <div className="flex p-10 gap-32 border-b-2">
              <div>
                <h1 className="text-2xl text-[#290d1a]">Industries</h1>
              </div>
              <div className="w-48">
                <h1 className=" underline text-xl font-medium mb-3">fintich</h1>
                <h1 className=" underline text-xl font-medium mb-3">
                  Helthteach
                </h1>
                <h1 className=" underline text-xl font-medium mb-3">Edtech</h1>
                <h1 className=" underline text-xl font-medium mb-3">Gamedov</h1>
              </div>
              <div>
                <h1 className=" underline text-xl font-medium mb-3">
                  Real estate
                </h1>
                <h1 className=" underline text-xl font-medium mb-3">
                  Ecommercy
                </h1>
                <h1 className=" underline text-xl font-medium mb-3">
                  Marketing/adtech
                </h1>
              </div>
            </div>
            <div className="flex p-10 gap-32 pb-10">
              <div>
                <h1 className="text-2xl text-[#290d1a]">Industries</h1>
              </div>
              <div className="w-48">
                <h1 className=" underline text-xl font-medium mb-3">fintich</h1>
                <h1 className=" underline text-xl font-medium mb-3">
                  Helthteach
                </h1>
                <h1 className=" underline text-xl font-medium mb-3">Edtech</h1>
                <h1 className=" underline text-xl font-medium mb-3">Gamedov</h1>
              </div>
              <div>
                <h1 className=" underline text-xl font-medium mb-3">
                  Real estate
                </h1>
                <h1 className=" underline text-xl font-medium mb-3">
                  Ecommercy
                </h1>
                <h1 className=" underline text-xl font-medium mb-3">
                  Marketing/adtech
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
      {count2 && (
        <div id="drop"
          className="p-5 w-56 h-40 bg-white transition-all duration-2000 ease border-current absolute right-0 top-16 cursor-pointer bg-transparent z-10"
          onMouseOver={handleMouseOver2}
          onMouseOut={handleMouseOut2}
        >
          <div className="flex items-center gap-2 mb-2">
            <FaArrowRight />
            <h1 className="font-medium text-md">US & Worldwide</h1>
          </div>
          <div className="ml-6 mb-2">
            <h1 className="font-medium text-md">UK</h1>
          </div>
          <div className="ml-6 mb-2">
            <h1 className="font-medium text-md">DACH</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
