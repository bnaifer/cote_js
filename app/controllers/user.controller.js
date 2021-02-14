exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.vetoBoard = (req, res) => {
    res.status(200).send("veto Content.");
  };
  
  
  