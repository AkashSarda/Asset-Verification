pragma solidity ^0.4.0;

contract AssetContract{
  address public owner;
  struct Asset{
    address asset_owner;
    bool leased;
  }
  mapping (bytes32 => Asset) asset_docs;

  function AssetContract(){
    owner = msg.sender;
  }

  function storeProof(address asset_owner, bytes32 dochash){
    asset_docs[dochash].asset_owner = asset_owner;
    asset_docs[dochash].leased = false;
  }
}
