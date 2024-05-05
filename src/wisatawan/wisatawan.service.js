const {
  createWisatawan,
  findWisatawanByUniqueKey,
  findAllWisatawan,
  updateWisatawan,
  deleteWisatawan,
} = require("./wisatawan.repository");

const createNewWisatawan = async (payload) => {
  const { email, password, nama, alamat, no_hp } = payload;
  if (!email || !password || !nama || !alamat || !no_hp) {
    throw new Error("All fields are required");
  }

  return await createWisatawan(payload);
};

const loginWisatawan = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) {
    throw new Error("Email and password are required");
  }
  const data = await findWisatawanByUniqueKey({ email });
  if (!data) {
    throw new Error("Email not found");
  }
  if (data.password !== password) {
    throw new Error("Password is incorrect");
  }
  return data;
};

const getWisatawan = async (id) => {
  const data = await findWisatawanByUniqueKey({ id });
  if (!data) {
    throw new Error("Wisatawan not found");
  }
  return data;
};

const getAllWisatawan = async () => {
  return await findAllWisatawan();
};

const updateWisatawanData = async (id, payload) => {
  if (!id) {
    throw new Error("ID is required");
  }
  return updateWisatawan(id, payload);
};

const removeWisatawan = async (id) => {
  if (!id) {
    throw new Error("ID is required");
  }
  return deleteWisatawan(id);
};

module.exports = {
  createNewWisatawan,
  loginWisatawan,
  getWisatawan,
  getAllWisatawan,
  updateWisatawanData,
  removeWisatawan,
};
