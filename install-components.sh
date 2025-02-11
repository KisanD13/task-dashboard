#!/bin/bash
components=(
    "button"
    "card"
    "calendar"
    "form"
    "input"
    "dialog"
    "checkbox"
    "avatar"
    "dropdown-menu"
)

for component in "${components[@]}"
do
    npx shadcn@latest add $component
done 