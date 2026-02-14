import { useState } from "react";
import api from "../../api/client";
import TextInput from "../form/TextInput";
import PrimaryButton from "../form/PrimaryButton";

export default function RunWorkflow({ workflows }) {

    const [selectedWorkflow, setSelectedWorkflow] = useState("");
    const [inputText, setInputText] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleRun = async () => {
        if (!selectedWorkflow) return alert("Select workflow");

        setLoading(true);
        const res = await api.post(
            `/workflows/${selectedWorkflow}/run`,
            { inputText }
        );

        setResult(res.data);
        setLoading(false);
    };

    return (
        <div>
            <div style={{ marginBottom: 12 }}>
                <label>Select Workflow</label>
                <select
                    value={selectedWorkflow}
                    onChange={(e) => setSelectedWorkflow(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: 6,
                        border: "1px solid #ccc",
                    }}
                >
                    <option value="">Select...</option>
                    {workflows.map((wf) => (
                        <option key={wf._id} value={wf._id}>
                            {wf.name}
                        </option>
                    ))}
                </select>
            </div>

            <TextInput
                label="Input Text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text to process"
            />

            <PrimaryButton onClick={handleRun}>
                {loading ? "Running..." : "Run Workflow"}
            </PrimaryButton>

            {result && (
                <div style={{ marginTop: 20 }}>
                    <h4>Step Outputs</h4>
                    {result.stepOutputs.map((step, i) => (
                        <div
                            key={i}
                            style={{
                                border: "1px solid #eee",
                                padding: 10,
                                marginBottom: 8,
                                borderRadius: 6,
                            }}
                        >
                            <strong>{step.stepType}</strong>
                            <p>{step.output}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
