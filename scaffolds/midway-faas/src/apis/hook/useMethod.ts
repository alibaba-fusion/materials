import { useContext } from '@midwayjs/hooks';

/**
 * Get Request HTTP Method (GET/POST)
 */
export function useMethod() {
  const { method } = useContext();
  return method;
}
