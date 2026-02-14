import StepItem from "./StepItem";
import PrimaryButton from "../form/PrimaryButton";

export default function StepsList({ steps, setSteps }) {
    const addStep = () => {
        setSteps([...steps, { type: "clean_text" }]);
    };

    const updateStep = (index, type) => {
        const updated = [...steps];
        updated[index].type = type;
        setSteps(updated);
    };

    const removeStep = (index) => {
        const updated = steps.filter((_, i) => i !== index);
        setSteps(updated);
    };

    return (
        <div>
            {steps.map((step, index) => (
                <StepItem
                    key={index}
                    step={step}
                    index={index}
                    onChange={updateStep}
                    onRemove={removeStep}
                />
            ))}

            <PrimaryButton onClick={addStep}>+ Add Step</PrimaryButton>
        </div>
    );
}
