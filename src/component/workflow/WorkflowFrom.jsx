import { useState } from "react";
import TextInput from "../form/TextInput";
import StepsList from "./StepList";
import PrimaryButton from "../form/PrimaryButton";
import api from "../../api/client";

export default function WorkflowForm({ onWorkflowCreated }) {
    const [name, setName] = useState("");
    const [steps, setSteps] = useState([{ type: "clean_text" }]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await api.post("/workflows", {
            name,
            steps: steps.map((s, i) => ({ ...s, order: i + 1 })),
        });

        setName("");
        setSteps([{ type: "clean_text" }]);
        alert("Workflow created");
        onWorkflowCreated();
    };

    return (
        <form onSubmit={handleSubmit} className="">
            <TextInput
                label="Workflow Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter workflow name"
            />

            <StepsList steps={steps} setSteps={setSteps} />

            <div style={{ marginTop: 16 }}>
                <PrimaryButton type="submit">Create Workflow</PrimaryButton>
            </div>
        </form>
    );
}
