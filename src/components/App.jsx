import React, { useState } from "react";
import { MsalProvider, MsalAuthenticationTemplate, UnauthenticatedTemplate, useMsal, useAccount } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "../config/authConfig";
import { PageLayout } from "./ui.jsx";
import { ProfileData, callMsGraph } from "./graph.jsx";
import { ErrorBoundary } from "./ErrorBoundary.jsx";
import Button from '@material-ui/core/Button';

const ProfileContent = () => {
    const { instance, accounts } = useMsal();
    const account = useAccount(accounts[0] || {});
    const [graphData, setGraphData] = useState(null);

    function RequestProfileData() {
        instance.acquireTokenSilent({
            ...loginRequest,
            account: account
        }).then((response) => {
            callMsGraph(response.accessToken).then(response => setGraphData(response));
        });
    }

    return (
        <>
            <h5 className="card-title">Welcome {account && account.name}</h5>
            {graphData ? 
                <ProfileData graphData={graphData} />
                :
                <Button variant="secondary" onClick={RequestProfileData}>Request Profile Information</Button>
            }
        </>
    );
};
const InProgressComponent = ({inProgress}) => {
    return <h5>{inProgress} In Progress</h5>;
}

const ErrorComponent = ({error}) => {
    return <h5>This is a protected page and the following error occurred during authentication: <strong>{error.errorCode}</strong></h5>;
}

const MainContent = () => {    
    return (
        <div className="App">
            <ErrorBoundary>
                <MsalAuthenticationTemplate interactionType="redirect" loadingComponent={InProgressComponent} errorComponent={ErrorComponent}>
                    <ProfileContent />
                </MsalAuthenticationTemplate>
            </ErrorBoundary>

            <UnauthenticatedTemplate>
                <h5 className="card-title">Please sign-in to see your profile information.</h5>
            </UnauthenticatedTemplate>
        </div>
    );
};

export default function App() {
    const msalInstance = new PublicClientApplication(msalConfig);

    return (
        <MsalProvider instance={msalInstance}>
            <PageLayout>
                <MainContent />
            </PageLayout>
        </MsalProvider>
    );
}