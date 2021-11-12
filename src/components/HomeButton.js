import React from "react";

export default function HomeButton () {
    return (
        <div class="sidebar-item side-green hover">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
                    fill="#ffffff" />
            </svg>
            <span>Home</span>
        </div>
    );
}