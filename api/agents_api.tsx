import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "https://agents4hire-154919156893.us-central1.run.app";

const fetchAgents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/agents`);
    return response.data;
  } catch (error) {
    console.error("Error fetching agents data:", error);
    throw error; 
  }
};

export default fetchAgents;


