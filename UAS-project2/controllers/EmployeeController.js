// import Model Employee
const Employee = require("../models/Employee")

// buat class EmployeeController
class EmployeeController {
  async index(req, res) {
    // TODO 4: Tampilkan data 
    const employees = await Employee.all();

    const data = {
        message: "Menampilkan data employee",
        data: employees
    };

    res.status(200).json(data);
}

async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */

    const employees = await Employee.create(req.body);
    const data = {
        message: "Menambahkan data employee",
        data: employees,
    };

    res.status(201).json(data);
}


async update(req, res) {
    /**
     * check id 
     * jika ada, lakukan update
     * jika tidak, kirim data tidak ada
     */
    const { id } = req.params;

    const employees = await Employee.find(id);

    if (employees) {
        // update data
        const employeeUpdated = await Employee.update(id, req.body);
        const data = {
            message: "Mengupdate data employee",
            data: employeeUpdated,
        };

        res.status(200).json(data);
    }
    else {
        // kirim data tidak ada
        const data = {
            message: "Data tidak ada",
        };

        res.status(404).json(data);
    }

}

async destroy(req, res) {
    const { id } = req.params;

    /**
     * cari id
     * jika ada, hapus data
     * jika tidak, kirim data tidak ada
     */

    const employee = await Employee.find(id);

    if (employee) {
        // hapus data
        await Employee.delete(id);
        const data = {
            message: "Menghapus data employee",
        };

        res.status(200).json(data);
    }
    else {
        // data tidak ada
        const data = {
            message: "Data tidak ada",
        };

        res.status(404).json(data);
    }
}

async show(req, res) {
    /**
     * cari id
     * jika ada, kirim datanya
     * jika tidak, kirim data tidak ada
     */
    const { id } = req.params;

    const employee = await Employee.find(id);

    if (employee) {
        const data = {
            message: "Menampilkan detail data employee bedasarkan id",
            data: employee,
        };

        res.status(200).json(data);
    }
    else {
        const data = {
            message: "Data tidak ada",
        };

        res.status(404).json(data);
    }

}

async search(req, res) {
  /**
   * cari nama
   * jika ada, kirim datanya
   * jika tidak, kirim data tidak ada
   */
  const { name } = req.params;

  const employee = await Employee.search(name);

  if (employee) {
      const data = {
          message: "Menampilkan detail data employee bedasarkan nama",
          data: employee,
      };

      res.status(200).json(data);
  }
  else {
      const data = {
          message: "Data tidak ada",
      };

      res.status(404).json(data);
  }

}
async status(req, res) {
 
  const { status } = req.params;

  const employee = await Employee.findByStatus(status);

  if (req.params = status) {
      const data = {
          message: `Menampilkan detail data employee ${status}`,
          data: employee,
      };

      res.status(200).json(data);
  }
  else {
      const data = {
          message: "Data tidak ada",
      };

      res.status(404).json(data);
  }

  

}

}

// membuat object EmployeeController
const object = new EmployeeController();

// export object EmployeeController
module.exports = object;