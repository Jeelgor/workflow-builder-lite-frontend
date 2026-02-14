import { useState } from "react";
import api from "../../api/client";
import TextInput from "../form/TextInput";
import PrimaryButton from "../form/PrimaryButton";
import { toast } from "react-toastify";

export default function RunWorkflow({ workflows }) {

    const [selectedWorkflow, setSelectedWorkflow] = useState("");
    const [inputText, setInputText] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleRun = async () => {
        if (!selectedWorkflow) return toast("Please Select workflow");

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
                    className="w-full px-2.5 py-2.5 rounded-md border border-gray-300"
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
                            className="border border-gray-200 p-2.5 mb-2 rounded-md"
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
