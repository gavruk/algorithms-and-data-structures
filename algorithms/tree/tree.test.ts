import { convertArrayToTree } from '../../testing';
import { 
  maxDepth,
  minDepth,
  isSymmetric,
} from './tree';

describe('Tree algorithms', () => {
  describe('maxDepth', () => {
    it('should find max depth', () => {
      const data = convertArrayToTree([1, 2, 3, 4, 5, 6]);
      const result = maxDepth(data);
      expect(3).toEqual(result);
    });

    it('should find max depth for not balanced', () => {
      const data = convertArrayToTree([1, 2, 3, 4, null]);
      const result = maxDepth(data);
      expect(3).toEqual(result);
    });
  });

  describe('minDepth', () => {
    it('should find min depth', () => {
      const data = convertArrayToTree([1, 2, 3, 4, 5, 6]);
      const result = minDepth(data);
      expect(3).toEqual(result);
    });

    it('should find min depth for not balanced', () => {
      const data = convertArrayToTree([1, 2, 3, 4, null]);
      const result = minDepth(data);
      expect(2).toEqual(result);
    });
  });

  describe('isSymmetric', () => {
    it('should check if symmetric', () => {
      const data = convertArrayToTree([1,2,2,3,4,4,3]);
      const result = isSymmetric(data);
      expect(true).toEqual(result);
    });
  });
});
