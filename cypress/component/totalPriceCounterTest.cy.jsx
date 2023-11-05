let shippingFee = 5.43;
let discount = 1.89;
let productPrice = 84.82;
let total = 88.36;

describe('Check total price', () => {
  it('total price function works properly', () => {
    expect(productPrice + shippingFee - discount).to.equal(total);
  })
})