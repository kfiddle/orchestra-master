
// *** important. "AddressLine2 below will often be left empty during object construction"
// it must therefore always be given as an empty string in the constructor

class Address {
  private addressLine1: string;
  private addressLine2: string;
  private city: string;
  private state: string;
  private zip: string;

  constructor(addressLine1: string, addressLine2: string, city: string, state: string, zip: string) {
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }

  setAddressLine1(addressLine1: string) {
    this.addressLine1 = addressLine1;
  }

  setAddressLine2(addressLine2: string) {
    this.addressLine2 = addressLine2;
  }

  setCity(city: string) {
    this.city = city;
  }

  setState(state: string) {
    this.state = state;
  }

  setZip(zip: string) {
    this.zip = zip;
  }
}

export default Address;
