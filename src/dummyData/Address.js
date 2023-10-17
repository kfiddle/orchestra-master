// *** important. "AddressLine2 below will often be left empty during object construction"
// it must therefore always be given as an empty string in the constructor

class Address {
  constructor(addressLine1, addressLine2, city, state, zip) {
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }

  setAddressLine1(addressLine1) {
    this.addressLine1 = addressLine1;
  }

  setAddressLine2(addressLine2) {
    this.addressLine2 = addressLine2;
  }

  setCity(city) {
    this.city = city;
  }

  setState(state) {
    this.state = state;
  }

  setZip(zip) {
    this.zip = zip;
  }
}

export default Address;
