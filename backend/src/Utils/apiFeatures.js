class apiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const search = this.queryStr.search
      ? {
          name: {
            $regex: this.queryStr.search, // regular expression
            $options: "i", // case-insensitive
          },
        }
      : {};
    this.query = this.query.find({ ...search });
    return this;
  }

  filter() {
    const queryStrCopy = { ...this.queryStr };
    //console.log(queryStrCopy);

    const removeFields = ["search", "limit", "page"];

    removeFields.forEach((key) => delete queryStrCopy[key]);

    // this.query.find(queryStrCopy);

    //console.log(queryStrCopy);

    // 1 B) Advanced filtering
    let queryStr = JSON.stringify(queryStrCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }
  paginate(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    // const limit = Number(this.queryStr.limit) || 9;
    // const skip = (currentPage - 1) * limit;
    // this.query = this.query.limit(limit).skip(skip);
    const skip = resultPerPage * (currentPage - 1); // current page ku munnadi iruka datas ellam skip panrom
    this.query = this.query.limit(resultPerPage).skip(skip); // limit vanthu evlo data mattum varanumnu solrom and skip vanthu evlo data va skip panrom
    return this;
  }
}

module.exports = apiFeatures;
