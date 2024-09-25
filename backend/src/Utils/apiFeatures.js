class apiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.search
      ? {
          name: {
            $regex: this.queryStr.search, // regular expression
            $options: "i", // case-insensitive
          },
        }
      : {};
    this.query = this.query.find({ ...keyword });
    return this;
  }
}

module.exports = apiFeatures;
