const Certificate = artifacts.require("Certificate");

contract("Certificate", accounts => {
  let certificateInstance;

  before(async () => {
    certificateInstance = await Certificate.deployed();
  });

  it("should create a new certificate", async () => {
    await certificateInstance.createCertificate("John Doe", "Blockchain 101", { from: accounts[0] });
    const certificate = await certificateInstance.certificates(0);
    
    assert.equal(certificate.name, "John Doe", "The name of the first certificate is not correct");
    assert.equal(certificate.course, "Blockchain 101", "The course of the first certificate is not correct");
    assert.equal(certificate.student, accounts[0], "The address of the student is not correct");
  });

  it("should retrieve a certificate by id", async () => {
    const certificate = await certificateInstance.getCertificate(1);
    
    assert.equal(certificate.name, "John Doe", "The name of the certificate retrieved is not correct");
    assert.equal(certificate.course, "Blockchain 101", "The course of the certificate retrieved is not correct");
    assert.equal(certificate.student, accounts[0], "The address of the student retrieved is not correct");
  });
});