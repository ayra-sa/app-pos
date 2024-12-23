import IAdd from "components/icons/IAdd";
import IEdit from "components/icons/IEdit";
import IEyes from "components/icons/IEyes";
import IHapus from "components/icons/IHapus";
import ISearchInput from "components/icons/IsearchInput";
import TitlePageReload from "components/TitlePage/TitlePageReload";
import Admin from "layouts/Admin";
import { round } from "lodash";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import ReactPaginate from "react-paginate";
import ModalConfirmationDelete from "components/modalConfirmationDelete";
import ModalConfirmationAdd from "components/modalConfirmationAdd";
import ModalConfirmationEdit from "components/modalConfirmationEdit";
import ModalAddKategoriBarang from "components/inventory/kategoriBarang/modalAdd";
import ModalEditKategoriBarang from "components/inventory/kategoriBarang/modalEdit";
import ModalDetailKategoriBarang from "components/inventory/kategoriBarang/modalDetail";
import WithAuth from "components/config/protect";
import axiosInstance from "global-states/api";

const KategoriBarang = () => {
  const [modalDetail, setmodalDetail] = useState(false);
  const [modalAdd, setmodalAdd] = useState(false);
  const [modalEdit, setmodalEdit] = useState(false);
  const [modalConfirmationAdd, setmodalConfirmationAdd] = useState(false);
  const [modalConfirmationEdit, setmodalConfirmationEdit] = useState(false);
  const [modalConfirmationDelete, setmodalConfirmationDelete] = useState(false);
  const [categories, setCategories] = useState([]);
  const [meta, setMeta] = useState({});
  const [links, setLinks] = useState({});
  const [newCategory, setNewCategory] = useState({})
  const [categoryToView, setCategoryToView] = useState(null)
  const [categoryToEdit, setCategoryToEdit] = useState(null)
  const [imageFile, setImageFile] = useState(null)
  const [newImageFile, setNewImageFile] = useState(null)
  const [categoryId, setCategoryId] = useState(null)

  const fetchDataCategories = async () => {
    try {
      const response = await axiosInstance.get('/product-categories');
      const data = response.data?.data.map((item,id) => ({
        no: id+1,
        id: item.id,
        name: item.attributes?.name,
        image: item.attributes?.image,
        productsCount: item.attributes?.products_count,
        link: item.links?.self,
      }));

      const meta = response.data?.meta;
      const links = response.data?.links;

      setCategories(data || []);
      setMeta(meta || {});
      setLinks(links || {});
    } catch (error) {
      console.error("Error saat mengambil data kategori produk:", error);
    }
  };

  const fetchCategoryDetail = async (id) => {
    try {
      const res = await axiosInstance.get(`/product-categories/${id}`)
      setCategoryToView(res.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleEdit = (category) => {
    setCategoryToEdit(category)
    setmodalEdit(true)
  }

  const updateCategory = async () => {
    if (categoryToEdit) {
      const newData = new FormData()
      newData.append("name", categoryToEdit.name)
      if (imageFile) {
        newData.append("image", imageFile)
      }
      try {
        await axiosInstance.post(`/product-categories/${categoryToEdit.id}`, newData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        setmodalEdit(false)
        alert("Update berhasil")
        fetchDataCategories()
      } catch (error) {
        console.error(error)
        alert("Update gagal")
      }
    }
  }

  const createCategory = async () => {
    const formData = new FormData()
    formData.append('name', newCategory.name)
    formData.append('image', newImageFile)
    
    try {
      const res = await axiosInstance.post("/product-categories", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      if (res.status === 201) {
        alert("Data berhasil ditambahkan!")
        setNewCategory({})
        setNewImageFile(null)
        fetchDataCategories()
      }
    } catch (error) {
      console.error(error)
      alert("Gagal menambahkan data!")
    }
  }

  const deleteCategory = async () => {
    try {
      await axiosInstance.delete(`/product-categories/${categoryId}`)
      alert("Berhasil menghapus data")
      fetchDataCategories()
    } catch (error) {
      console.error('Error deleting product:', error);
      alert("Gagal menghapus data")
    }
  };

  const handleViewDetail = (id) => {
    fetchCategoryDetail(id)
    setmodalDetail(true)
  }

  const handleImageUpload = (file) => {
    setNewImageFile(file);
  };
  const handleImageChange = (file) => {
    setImageFile(file);
  };

  const handleDelete = (id) => {
    setCategoryId(id)
    setmodalConfirmationDelete(true);
  }

  // eslint-disable-next-line no-unused-vars
  const [pageFisik, setPageFisik] = useState(1);

  const handlePagination = (page) => {
    setPageFisik(page.selected + 1);
  };

  // const ButtonAct = () => {
  //   setmodalConfirmationAdd(false);
  //   setmodalConfirmationEdit(false);
  //   setmodalConfirmationDelete(false);
  //   setmodalAdd(false);
  //   setmodalEdit(false);
  // };

  const handleActSubmitAddConfirm = () => {
    createCategory()
    setmodalConfirmationAdd(false);
  }

  const handleActSubmitEditConfirm = () => {
    updateCategory()
    setmodalConfirmationEdit(false);
  }

  const handleActSubmitDeleteConfirm = () => {
    deleteCategory()
    setmodalConfirmationDelete(false);
  }

  const columns = [
    {
      name: "No",
      width: "70px",
      selector: (row) => row.id,
    },
    {
      name: "Icon",
      selector: (row) => row.image,
      cell: (row) => {
        return (
          <div className="w-100 d-flex align-center gap-10px">
            <div>
              <img
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "3px",
                }}
                src={row.image}
                alt=""
              />
            </div>
            <div>
              <IEyes />
            </div>
          </div>
        );
      },
    },
    {
      name: "Nama Kategori",
      selector: (row) => row.name,
    },
    {
      name: "Dibuat Pada",
      selector: (row) => <p>20 Juli 2023, 19:12</p>,
    },
    {
      name: "Aksi",
      width: "180px",
      cell: (row, index, column, id) => {
        return (
          <div className="display-flex-align-center">
            <div
              onClick={() => {
                handleViewDetail(row.id);
              }}
              className="cursor-pointer mr-16px"
            >
              <IEyes />
            </div>
            <div
              onClick={() => {
                handleEdit(row);
              }}
              className="cursor-pointer mr-16px"
            >
              <IEdit />
            </div>
            <div
              onClick={() => {
                handleDelete(row.id);
              }}
              className="cursor-pointer"
            >
              <IHapus />
            </div>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    fetchDataCategories();
  }, []);

  const CustomPagination = () => {
    const count = round(10);
    const currentPage = 1;

    return (
      <ReactPaginate
        previousLabel={""}
        nextLabel={""}
        breakLabel="..."
        pageCount={Math.ceil(meta?.last_page) || 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        activeClassName="active-page"
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={(page) => handlePagination(page)}
        pageClassName="page-item"
        breakClassName="page-item"
        nextLinkClassName="page-link te-card-shadow b1-bold"
        pageLinkClassName="page-link te-card-shadow b1-bold"
        breakLinkClassName="page-link te-card-shadow b1-bold"
        previousLinkClassName="page-link te-card-shadow b1-bold"
        nextClassName="page-item next"
        previousClassName="page-item prev"
        containerClassName={
          "custom-pagination react-paginate justify-content-end m-0"
        }
      />
    );
  };

  return (
    <Admin>
      <div
        style={{
          backgroundColor: "white",
          minHeight: "calc(100vh - 191px)",
        }}
      >
        <TitlePageReload title={"Kategori Barang"} />

        <div>
          <div className="finance-penerimaan-wrapp-second">
            <div style={{ display: "flex" }}>
              <div className="finance-penerimaan-wrapp-search">
                <ISearchInput />
                <input
                  placeholder="cari"
                  className="finance-penerimaan-wrapp-search-input"
                  type="text"
                />
              </div>
            </div>

            <div>
              <div>
                <div
                  onClick={() => setmodalAdd(true)}
                  className="finance-penerimaan-buttont-buat-wrapp"
                >
                  <IAdd />
                  <div className="finance-penerimaan-buttont-buat">
                    Tambah Kategori
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-16px">
            <DataTable columns={columns} data={categories} />

            <CustomPagination />
          </div>
        </div>
      </div>
      <ModalConfirmationDelete
        isModalUp={modalConfirmationDelete}
        setisModalUp={setmodalConfirmationDelete}
        actionCallback={handleActSubmitDeleteConfirm}
      />
      <ModalConfirmationAdd
        isModalUp={modalConfirmationAdd}
        setisModalUp={setmodalConfirmationAdd}
        actionCallback={handleActSubmitAddConfirm}
      />
      <ModalConfirmationEdit
        isModalUp={modalConfirmationEdit}
        setisModalUp={setmodalConfirmationEdit}
        actionCallback={handleActSubmitEditConfirm}
      />
      <ModalDetailKategoriBarang
        isModalUp={modalDetail}
        setisModal={setmodalDetail}
        img={
          "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1721855396-glow-recipe-fruit-babies-skincare-kit-66a16c8cae454.jpg?crop=1xw:1xh;center,top&resize=980:*"
        }
        namaKategori={"Nama Kategori"}
        item={categoryToView}
      />
      <ModalAddKategoriBarang
        isModalUp={modalAdd}
        setisModal={setmodalAdd}
        newCategory={newCategory}
        setNewCategory={setNewCategory}
        handleImageUpload={handleImageUpload}
        handleActCancel={() => {
          setmodalAdd(false);
        }}
        handleActSubmit={() => {
          setmodalAdd(false);
          setmodalConfirmationAdd(true);
        }}
      />
      <ModalEditKategoriBarang
        isModalUp={modalEdit}
        setisModal={setmodalEdit}
        category={categoryToEdit}
        setCategoryToEdit={setCategoryToEdit}
        handleImageChange={handleImageChange}
        handleActCancel={() => {
          setmodalEdit(false);
        }}
        handleActSubmit={() => {
          setmodalEdit(false);
          setmodalConfirmationEdit(true);
        }}
      />
    </Admin>
  );
};

export default WithAuth(KategoriBarang);
