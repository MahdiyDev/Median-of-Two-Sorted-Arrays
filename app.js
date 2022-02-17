  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  var findMedianSortedArrays = function (nums1, nums2) {
    let newArr = [...nums1, ...nums2];
    newArr = newArr.sort((a, b) => a - b);
    let indexArr = newArr.length % 2;
    let halfArr = newArr.length / 2;

    if (indexArr) {
      halfArr = Math.floor(halfArr);
      return newArr[halfArr];
    } else {
      return (newArr[halfArr] + newArr[halfArr - 1]) / 2;
    }
  };

console.log(findMedianSortedArrays([3], [-2, -1]));
