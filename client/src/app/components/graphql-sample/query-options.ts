const queryUserOptions = {
  name: false,
  email: false,
  age: false,
  score: false
};
const queryProductOptions = {
  familyId: false,
  familyName: false,
  categories: false,
  categoryName: false,
  offerType: false,
  offerSubType: false,
  offerLevel: false,
  productType: false,
  productSubType: false,
  url: false,
  productName: false,
  productManufacturer: false,
  description: false,
  longDescription: false,
  priority: false,
  operatingSystem: false,
  screenSizes: false,
  conditions: false,
  internalMemorySizes: false,
  features: false,
  tacCodes: false,
  bestSeller: false,
  isFeatured: false,
  rating: false,
  reviewCount: false,
  pageViews: false
};

export const QueryOptions = {
  product: queryProductOptions,
  user: queryUserOptions
};