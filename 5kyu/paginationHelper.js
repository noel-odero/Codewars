//
// Description: For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.
// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.
// The following are some examples of how this class is used:
// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid
// // page_index takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1


//  My solution:


class PaginationHelper {
	constructor(collection, itemsPerPage) {
     this.collection = collection;
     this.itemsPerPage = itemsPerPage;
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
	}
	itemCount() {
    return this.collection.length
	// returns the number of items within the entire collection
	}
	pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage)
	// returns the number of pages
	}
	pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1;
    }
     // Calculate the number of items on the last page
    if (pageIndex === this.pageCount() - 1) {
      return this.collection.length % this.itemsPerPage || this.itemsPerPage;
    }

    // Return the number of items on any other page
    return this.itemsPerPage;
  }

	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range

	pageIndex(itemIndex) {
     // Check if the item index is within the valid range
    if (itemIndex < 0 || itemIndex >= this.collection.length) {
      return -1;  // Invalid itemIndex
    }

    // Calculate and return the page index
    return Math.floor(itemIndex / this.itemsPerPage);
  }
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range


}

let helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
console.log(helper.pageCount());