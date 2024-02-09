import axios from "axios";

export const fetchImages = async (query, page) => {
    const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              client_id: "OZhsaeZFj3oXRRsAyUXuUHhe-abKqatJ4ZeiFv0_0_4",
              query,
              page,
              per_page: 10,
            },
          }
    );
    
    return response.data.results;
}