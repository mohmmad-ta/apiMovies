import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] =
    "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmEwODhjOGEwZjdiZGFmOTg0NWVkNWIzNTg1NTVjZCIsInN1YiI6IjY0NjhiYmUxYzM1MTRjMDBlNWRkMjgwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kM3xbG5qyYm_kG1QxPMXa0W0j2L2QHbdYOFWnFxuq0U";