const prisma = require("../database");

const createWisatawan = async (payload) => {
  const { email, password, nama, alamat, no_hp } = payload;
  return prisma.wisatawan.create({
    data: {
      email,
      password,
      nama,
      alamat,
      no_hp,
    },
  });
};

const findWisatawanByUniqueKey = async (payload) => {
  const { id, email } = payload;
  return prisma.wisatawan.findFirst({
    where: {
      OR: [{ id }, { email }],
    },
  });
};

const findAllWisatawan = async () => {
  return prisma.wisatawan.findMany();
};

const updateWisatawan = async (id, payload) => {
  const { email, nama, alamat, no_hp } = payload;
  return prisma.wisatawan.update({
    where: {
      id,
    },
    data: {
      email,
      nama,
      alamat,
      no_hp,
    },
  });
};

const deleteWisatawan = async (id) => {
  return prisma.wisatawan.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  createWisatawan,
  findWisatawanByUniqueKey,
  findAllWisatawan,
  updateWisatawan,
  deleteWisatawan,
};
