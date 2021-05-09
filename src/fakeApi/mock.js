import MockAdapter from "axios-mock-adapter";
import apiClient from "@/services/axios/index";

const mock = new MockAdapter(apiClient, { delayResponse: 500 });

export default mock;
