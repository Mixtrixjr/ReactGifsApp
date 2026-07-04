interface CustomheaderProps {
    title: string;
    description?: string;
}


export const Customheader = ({title, description}: CustomheaderProps) => {
  return (
    <>
 {/*Header*/}
    <div className="content-center">
    <h1>{title}</h1>
    {
        description && (<p>{description}</p>)
    }
    </div>
</>
  );
};

