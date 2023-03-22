function DeleteButton({ removeData }) {
  const handleClick = () => {
    const deleteIds = Array.from(
      document.querySelectorAll('.delete-checkbox:checked')
    ).map((elem) => +elem.value);

    removeData(deleteIds);

    fetch("http://localhost:8080/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'deleteProducts',
        ids: deleteIds,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete items');
        }
        console.log('Items deleted successfully');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="btn">
      <button onClick={handleClick}>MASS DELETE</button>
    </div>
  );
}

export default DeleteButton;
