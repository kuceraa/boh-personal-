const caseWorker = {
    getAllClients: (req, res) => {
      const pool = req.app.get('pool');
      const qryStr = `
        select name,
        primary_first_name,
        primary_last_name,
        primary_email,
        primary_phone
        from public.client
        order by id asc limit 3
      `;
  
      pool.select(res, qryStr);
    },
  
    getAllCompanies: (req, res) => {
        const pool = req.app.get('pool');
        const qryStr = `
          select last_name,
          first_name,
          phone_number,
          status_id
          from public.client
          order by id asc limit 3
        `;
        pool.select(res, qryStr);
    }
  };
  
  module.exports = caseWorker;