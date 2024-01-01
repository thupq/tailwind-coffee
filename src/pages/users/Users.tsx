import { useEffect, useState } from "react";
import UserApi from "../../api/userApi";

const Users = () => {
  const [dataUsers, setDataUsers] = useState<any[]>();
  const getAllUser = async () => {
    const { data: { data: content } } = await UserApi.get({});
    console.log(content);
    setDataUsers(content.content);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
      // <div>
      //   <ul>
      //     {
      //       dataUsers && dataUsers?.map(item => (
      //           <li key={item.id}>
      //             { item.fullName }
      //           </li>
      //       ))
      //     }
      //   </ul>
      // </div>
      <div>
          <h2> Users </h2>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          User name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Full name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Contact phone
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                          <span className="sr-only">Edit</span>
                      </th>
                  </tr>
                  </thead>
                  <tbody>
                  {/* Dữ liệu từ dataUsers */}
                  {dataUsers && dataUsers.map((item) => (
                      <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {item.userName}
                          </td>
                          <td className="px-6 py-4">
                              {item.fullName}
                          </td>
                          <td className="px-6 py-4">
                              {item.contactPhone}
                          </td>
                          <td className="px-6 py-4">
                              {item.email}
                          </td>
                          <td className="px-6 py-4 text-right">
                              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                          </td>
                      </tr>
                  ))}
                  </tbody>
              </table>
          </div>
      </div>
  );
};

export default Users;