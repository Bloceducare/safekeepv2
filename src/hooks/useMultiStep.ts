import { useState } from "react"

const useMultiStep = (totalStep)=>{
    const [currentStep, setCurrentStep] = useState(0)
    const next = ()=>{
        setCurrentStep(step => step ==totalStep -1 ? step : step + 1)
    }

    function goTo(index: number) {
        setCurrentStep(index)
      }

    const prev = ()=>{
        setCurrentStep(step => step ==0 ? 0 :step -1)
    }
    return  {prev, next, currentStep, setCurrentStep, isNext:currentStep < totalStep, isPrev:currentStep <=totalStep, goTo,  isFirstStep: currentStep === 0,
        isLastStep: currentStep ===totalStep - 1,}
}

export default useMultiStep