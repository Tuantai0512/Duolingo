"use client"
import * as React from "react"
import { useState, useEffect } from "react"

import { Progress } from "@/components/ui/progress"
import { Step1 } from "./change-password-step/step1"
import Step3 from "./change-password-step/step3"
import { Step2 } from "./change-password-step/step2"

export function ChangePassword() {
    const [progress, setProgress] = useState(0);
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => setProgress(0), 500)
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <Progress value={progress} className="w-full md:w-[60%]" />
            {progress == 0 && 
                <Step1 setProgress={setProgress} userEmail={userEmail} setUserEmail={setUserEmail}/>
            }
            {progress == 50 && 
                <Step2 setProgress={setProgress} userEmail={userEmail} setUserEmail={setUserEmail}/>
            }
            {progress == 100 && 
                <Step3 setProgress={setProgress} userEmail={userEmail} setUserEmail={setUserEmail}/>
            }
        </>
    )
}