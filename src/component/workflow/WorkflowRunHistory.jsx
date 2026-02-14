import React, { useEffect, useState } from "react";
import api from "../../api/client";

const WorkflowRunHistory = () => {
    const [runs, setRuns] = useState([]);
    const [openRunId, setOpenRunId] = useState(null);

    useEffect(() => {
        const fetchRuns = async () => {
            try {
                const res = await api.get("/runs");
                setRuns(res.data);
            } catch (error) {
                console.error("Error fetching runs:", error);
            }
        };

        fetchRuns();
    }, []);

    const toggleRun = (id) => {
        setOpenRunId(openRunId === id ? null : id);
    };

    return (
        <div>
            <h2>Workflow Run History</h2>

            {runs.length === 0 ? (
                <p>No runs yet</p>
            ) : (
                runs.map((run) => (
                    <div
                        key={run._id}
                        className="border border-gray-300 p-3 mb-3 rounded-md"
                    >
                        <p><strong>Workflow:</strong> {run.workflowName || run.workflowId}</p>
                        <p><strong>Input:</strong> {run.inputText.slice(0, 80)}...</p>
                        <p><strong>Time:</strong> {new Date(run.createdAt).toLocaleString()}</p>

                        <button
                            onClick={() => toggleRun(run._id)}
                            className="mt-2 bg-gray-900 text-white py-1.5 px-2.5 rounded border-0 cursor-pointer"
                        >
                            {openRunId === run._id ? "Hide Details" : "View Details"}
                        </button>

                        {openRunId === run._id && (
                            <div style={{ marginTop: 12 }}>
                                {run.stepOutputs.map((step, i) => (
                                    <div
                                        key={i}
                                        className="border-t border-gray-200 pt-2 mt-2"
                                    >
                                        <strong>{step.stepType}</strong>
                                        <p style={{ whiteSpace: "pre-wrap" }}>{step.output}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default WorkflowRunHistory;
