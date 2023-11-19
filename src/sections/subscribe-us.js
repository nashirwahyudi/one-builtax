/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Flex, Checkbox, Label } from 'theme-ui';
import { useState } from 'react';
import { rgba } from 'polished';
import illustration from 'assets/images/subscribe-bg.png';
import data from './../assets/builtup'
import DataTable from 'react-data-table-component';

const SubscribeUs = () => {
  const [checked, setChecked] = useState(false);

  const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }
  const columns = [
    {
        name: 'Nama Desa',
        selector: row => row.desa,
        sortable: true,
    },
    {
        name: 'Perkiraan harga bangunan per meterpersegi',
        selector: row => row.price_bangunan_per_m2_mean,
        sortable: true,
        format: (row, index) => {
          return <div className="text-muted">
            {rupiah(row.price_bangunan_per_m2_mean)}
          </div>
        }	
    },
    {
        name: 'Perkiraan harga tanah per meterpersegi',
        selector: row => row.price_tanah_per_m2_mean,
        sortable: true,
        format: (row, index) => {
          return <div className="text-muted">
            {rupiah(row.price_tanah_per_m2_mean)}
          </div>
        }	
    },
    {
        name: 'Total Perkiraan Harga',
        selector: row => row.price_total,
        sortable: true,
        format: (row, index) => {
          return <div className="text-success">
            {rupiah(row.price_total)}
          </div>
        }	
    },
    {
        name: 'Nilai Pajak',
        selector: row => row.nilai_pajak,
        sortable: true,
        format: (row, index) => {
          return <div className="fw-bolder text-danger">
            {rupiah(row.nilai_pajak)}
          </div>
        }	
    },
];

  return (
    <Box as="section" sx={styles.section} variant="section.subscribe">
      <Container>
        <div className="row rounded p-5" style={{background: "white"}}>
          <div className="col-12 border rounded">
            <DataTable
                title="Built up data"
                className="d-block"
                columns={columns}
                data={data}
                pagination
            />
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default SubscribeUs;

const styles = {
  section: {
    background: `url(${illustration}) no-repeat center cover`,
  },
  contentWrapper: {
    backgroundColor: '#fff',
    borderRadius: 15,
    p: [30, 40, null, '40px 100px', '50px 80px', '40px'],
    gap: '50px',
    display: ['block', 'block', 'grid', 'block', 'grid'],
    alignItems: 'center',
    gridTemplateColumns: ['repeat(2, 1fr)'],
  },
  heading: {
    textAlign: ['center', 'center', 'left', 'center', 'left'],
    mb: ['30px', '30px', '30px', '30px', 0],
    ml: 0,
    h2: {
      fontSize: ['24px', '24px', '24px', '28px', '32px', '36px'],
      letterSpacing: [0, 0, 0, '-1px'],
    },
    p: {
      lineHeight: 1.87,
      marginTop: 1,
      ml: ['auto', 'auto', 'auto', 'auto', 0],
      mr: ['auto', 'auto', 'auto', 'auto', 0],
      maxWidth: 420,
    },
  },
  subscribe: {
    '.email-input': {
      mr: [0, null, null, '15px'],
      minHeight: ['50px', '50px', '60px'],
    },
    button: {
      minHeight: ['50px', '50px', '60px'],
      fontSize: ['14px', '14px', '16px'],
      mt: ['15px', null, null, 0],
    },
  },
  formGroup: {
    flexDirection: ['column', null, null, 'row'],
  },
  checkbox: {
    mt: ['24px'],
    label: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.14,
      color: rgba('#9095AD', 0.9),
      zIndex: 10,
      svg: {
        path: {
          fill: '#EFF3F7',
        },
      },
      '&.checked': {
        svg: {
          path: {
            fill: 'primary',
          },
        },
      },
    },
  },
};
