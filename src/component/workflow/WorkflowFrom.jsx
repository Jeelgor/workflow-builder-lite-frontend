import { useState } from "react";
import TextInput from "../form/TextInput";
import StepsList from "./StepList";
import PrimaryButton from "../form/PrimaryButton";
import api from "../../api/client";

export default function WorkflowForm({ onWorkflowCreated }) {
    const [name, setName] = useState("");
    const [steps, setSteps] = useState([{ type: "clean_text" }]);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setError("Workflow name is required");
            return;
        }

        if (!steps.length) {
            setError("At least one step is required");
            return;
        }

        setError("");

        try {
            await api.post("/workflows", {
                name,
                steps: steps.map((s, i) => ({ ...s, order: i + 1 })),
            });

            setName("");
            setSteps([{ type: "clean_text" }]);
            onWorkflowCreated();
        } catch (err) {
            setError("Failed to create workflow");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <TextInput
                label="Workflow Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter workflow name"
            />

            <StepsList steps={steps} setSteps={setSteps} />
            {error && (
                <p className="text-sm text-red-600">{error}</p>
            )}

            <PrimaryButton type="submit">
                Create Workflow
            </PrimaryButton>
        </form>
    );
}
