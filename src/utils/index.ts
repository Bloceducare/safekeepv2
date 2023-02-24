


export function truncateWalletAddress(address, numChars = 5) {
    if(!address?.length){
        return "Connect"
    }
    if (address?.length <= numChars) {
      return address;
    } else {
      return address.slice(0, numChars) + "..." + address.slice(-numChars);
    }
  }
  