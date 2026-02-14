import PageContainer from "../component/layout/PageContainer";
import Header from "../component/layout/Header";
import SectionCard from "../component/layout/SectionCard";
import WorkflowForm from "../component/workflow/WorkflowFrom";
import RunWorkflow from "../component/workflow/RunWorkflow";
import WorkflowRunHistory from "../component/workflow/WorkFlowRunHistory";
import { useEffect, useState } from "react";
import api from "../api/client";

export default function Home() {

    const [workflows, setWorkflows] = useState([]);
    const fetchWorkflows = async () => {
        const res = await api.get("/workflows");
        setWorkflows(res.data);
    };
    useEffect(() => {
        fetchWorkflows();
    }, []);
    return (
        <PageContainer>
            <Header />
            
            <SectionCard title="Create Workflow">
                <WorkflowForm onWorkflowCreated={fetchWorkflows} />
            </SectionCard>

            <SectionCard title="Run Workflow">
                <RunWorkflow workflows={workflows} />
            </SectionCard>

            <SectionCard title="Last 5 Runs">
                <WorkflowRunHistory />
            </SectionCard>
        </PageContainer>
    );
}
