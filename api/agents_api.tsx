import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
// const BASE_URL = process.env.REACT_APP_BASE_URL || "https://agents4hire-154919156893.us-central1.run.app";

export const fetchAgents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/agents`);
    return response.data;
  } catch (error) {
    console.error("Error fetching agents data:", error);
    throw error; 
  }
};

interface Step1Data {
  role: string;
  description: string;
}

interface StepNData {
  answers: string[];
}

type AgentData = Step1Data | StepNData;

interface CreateAgentResponse {
  success: boolean;
  message: string;
  data?: any; 
  questions?: string[];
  is_complete?: boolean;
}

type KPI = {
  kpi: string;
  expected_value: string;
};

type ReportData = {
  kpis: KPI[];
  specific_needs: string[];
  user_persona: string;
};



export const createAgent = async (data: AgentData, step: number): Promise<CreateAgentResponse> => {
  try {
    let endpoint = `${BASE_URL}/agents/create`;
    let payload: any;

    if (step === -1) {
      // For step 1, send the Step1Data directly
      payload = data as Step1Data;
    } else {
      // For other steps, send only the answers
      payload = { answers: (data as StepNData).answers};
    }

    const response = await axios.post<CreateAgentResponse>(endpoint, payload, { withCredentials: true });

    console.log(`Agent data for step ${step} sent successfully:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error sending agent data for step ${step}:`, error);
    throw error;
  }
};

export const createGoals = async () => {
  try {
    console.log(';;;;sqas')
    const data = await axios.get(`${BASE_URL}/agents/create/goals`,{ withCredentials: true })
    console.log(data)
    const response = await axios.post(`${BASE_URL}/agents/create/goals`, data.data,{ withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error getting goals:", error);
    throw error;
  }

}

export const getAgentTag = async (id : string) => {
  try {
    const response = await axios.get(`${BASE_URL}/agents/tags/${id}`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error getting agent tag:", error);
    throw error;
  }
};


export const getAgentSkill = async (id : string) => {
  try {
    const response = await axios.get(`${BASE_URL}/agents/skills/${id}`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error getting agent skill:", error);
    throw error;
  }
};

export const getAgentTraits = async (id : string) => {
  try {
    const response = await axios.get(`${BASE_URL}/agents/traits/${id}`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error getting agent traits:", error);
    throw error;
  }
};
