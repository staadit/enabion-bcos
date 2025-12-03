export interface AiGatewayHealth {
  status: 'ok';
  model: string;
  // TODO: Extend with latency / provider info when wiring real AI models.
}

export const pingAiGateway = async (): Promise<AiGatewayHealth> => {
  return {
    status: 'ok',
    model: 'dummy',
  };
};
