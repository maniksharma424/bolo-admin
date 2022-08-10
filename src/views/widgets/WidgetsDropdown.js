import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const WidgetsDropdown = ({ users, category, requirement, news, offer, event }) => {
  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="primary"
          value={
            <>
              {users.length}
            </>
          }
          title="Total Users"
        // action={
        //   <CDropdown alignment="end">
        //     <CDropdownToggle color="transparent" caret={false} className="p-0">
        //       <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
        //     </CDropdownToggle>
        //     <CDropdownMenu>
        //       <CDropdownItem>Action</CDropdownItem>
        //       <CDropdownItem>Another action</CDropdownItem>
        //       <CDropdownItem>Something else here...</CDropdownItem>
        //       <CDropdownItem disabled>Disabled action</CDropdownItem>
        //     </CDropdownMenu>
        //   </CDropdown>
        // }
        // chart={
        //   <CChartLine
        //     className="mt-3 mx-3"
        //     style={{ height: '70px' }}
        //     data={{
        //       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        //       datasets: [
        //         {
        //           label: 'My First dataset',
        //           backgroundColor: 'transparent',
        //           borderColor: 'rgba(255,255,255,.55)',
        //           pointBackgroundColor: getStyle('--cui-primary'),
        //           data: [65, 59, 84, 84, 51, 55, 40],
        //         },
        //       ],
        //     }}
        //     options={{
        //       plugins: {
        //         legend: {
        //           display: false,
        //         },
        //       },
        //       maintainAspectRatio: false,
        //       scales: {
        //         x: {
        //           grid: {
        //             display: false,
        //             drawBorder: false,
        //           },
        //           ticks: {
        //             display: false,
        //           },
        //         },
        //         y: {
        //           min: 30,
        //           max: 89,
        //           display: false,
        //           grid: {
        //             display: false,
        //           },
        //           ticks: {
        //             display: false,
        //           },
        //         },
        //       },
        //       elements: {
        //         line: {
        //           borderWidth: 1,
        //           tension: 0.4,
        //         },
        //         point: {
        //           radius: 4,
        //           hitRadius: 10,
        //           hoverRadius: 4,
        //         },
        //       },
        //     }}
        //   />
        // }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          value={
            <>
              {category.length}
            </>
          }
          title="Total Categories"

        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="warning"
          value={
            <>
              {requirement.length}

            </>
          }
          title="Requirements"

        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="danger"
          value={
            <>
              {news.length}

            </>
          }
          title="Total News"

        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="success"
          value={
            <>
              {offer.length}

            </>
          }
          title="Total Offers"

        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="dark"
          value={
            <>
              {event.length}

            </>
          }
          title="Total Events"

        />
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
