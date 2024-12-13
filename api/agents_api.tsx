import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

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


