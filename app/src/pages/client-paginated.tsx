import { useEffect, useState } from "react"

import SimpleTable from "../components/simple-table/simple-table"
import SimpleColumnsCheckbox from "../components/simple-columns-checkbox/simple-columns-checkbox"
import SimplePaginator from "../components/simple-paginator/simple-paginator"
import SimpleSelect from "../components/simple-select/simple-select"

import { useTable, QueryParametersGenerator } from "use-ful-table"

export default function Simple() {
  const [queryParameters, setQueryParameters] = useState<
    Record<string, string>
  >({})

  const data = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
    {
      userId: 1,
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    },
    {
      userId: 1,
      id: 7,
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    },
    {
      userId: 1,
      id: 8,
      title: "dolorem dolore est ipsam",
      body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    },
    {
      userId: 1,
      id: 9,
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    },
    {
      userId: 1,
      id: 10,
      title: "optio molestias id quia eum",
      body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    },
    {
      userId: 2,
      id: 11,
      title: "et ea vero quia laudantium autem",
      body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
    },
    {
      userId: 2,
      id: 12,
      title: "in quibusdam tempore odit est dolorem",
      body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
    },
    {
      userId: 2,
      id: 13,
      title: "dolorum ut in voluptas mollitia et saepe quo animi",
      body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
    },
    {
      userId: 2,
      id: 14,
      title: "voluptatem eligendi optio",
      body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
    },
    {
      userId: 2,
      id: 15,
      title: "eveniet quod temporibus",
      body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
    },
    {
      userId: 2,
      id: 16,
      title:
        "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
      body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
    },
    {
      userId: 2,
      id: 17,
      title: "fugit voluptas sed molestias voluptatem provident",
      body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
    },
    {
      userId: 2,
      id: 18,
      title: "voluptate et itaque vero tempora molestiae",
      body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
    },
    {
      userId: 2,
      id: 19,
      title: "adipisci placeat illum aut reiciendis qui",
      body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
    },
    {
      userId: 2,
      id: 20,
      title: "doloribus ad provident suscipit at",
      body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
    },
    {
      userId: 3,
      id: 21,
      title: "asperiores ea ipsam voluptatibus modi minima quia sint",
      body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt",
    },
    {
      userId: 3,
      id: 22,
      title: "dolor sint quo a velit explicabo quia nam",
      body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse",
    },
  ]

  const filteredData = data
    .filter((row) => {
      if (queryParameters.filters) {
        if (queryParameters.filters.userId) {
          return row.userId.toString() === queryParameters.filters.userId
        }
      }
      return true
    })
    .sort((a, b) => {
      if (queryParameters._sort) {
        if (queryParameters._order === "asc") {
          return a[queryParameters._sort] > b[queryParameters._sort] ? 1 : -1
        } else {
          return a[queryParameters._sort] < b[queryParameters._sort] ? 1 : -1
        }
      }
      return 0
    })

  const dataPage = filteredData.slice(
    (parseInt(queryParameters._page) - 1) * parseInt(queryParameters._limit),
    parseInt(queryParameters._page) * parseInt(queryParameters._limit)
  )

  const columnDetails = [
    { id: "id", title: "ID", sortable: true },
    { id: "userId", title: "User ID", sortable: true },
    { id: "title", title: "Title" },
    { id: "body", title: "Body" },
  ]

  const generateQueryParameters: QueryParametersGenerator = ({
    page,
    pageSize,
    sort,
    filters,
  }) => {
    const params = {
      filters,
      _sort: sort.column,
      _order: sort.column ? sort.direction : undefined,
      _limit: pageSize.toString(),
      _page: page.toString(),
    } as Record<string, string>

    const filteredParameters = Object.keys(params).reduce(
      (acc, key) => {
        if (params[key] !== null && params[key] !== undefined) {
          acc[key] = params[key]
        }
        return acc
      },
      {} as Record<string, string>
    )

    return filteredParameters
  }

  const table = useTable({
    data: dataPage,
    elementsCount: filteredData.length,
    pageSize: 4,
    columns: columnDetails,
    queryParametersGenerator: generateQueryParameters,
  })

  useEffect(() => {
    setQueryParameters(table.queryParameters)
  }, [table.queryParameters])

  return (
    <div>
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <SimpleSelect
          items={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
          value={table.filters.userId || undefined}
          setValue={(value) => table.setFilter("userId", value)}
        />
      </div>

      <SimpleColumnsCheckbox
        columns={columnDetails}
        hiddenColumns={table.hiddenColumns}
        setColumnHidden={table.setColumnHidden}
      />
      <SimpleTable
        columns={table.columns}
        rows={table.rows}
        sortBy={table.sortBy}
      />
      <SimplePaginator
        page={table.page}
        pageCount={table.pageCount}
        pageSize={table.pageSize}
        setPageSize={table.setPageSize}
        canNextPage={table.canNextPage}
        canPreviousPage={table.canPreviousPage}
        toPage={table.toPage}
        nextPage={table.nextPage}
        previousPage={table.previousPage}
      />
    </div>
  )
}