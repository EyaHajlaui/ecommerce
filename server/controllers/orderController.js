const Order = require('../model/order');


exports.createOrder = async (req, res) => {
  const { items, totalAmount } = req.body;
  const userId = req.user.id;

  try {
    const newOrder = new Order({
      userId,
      items,
      totalAmount,
      isConfirmed: false
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create order', error: err.message });
  }
};


exports.confirmOrder = async (req, res) => {
  const orderId = req.params.id;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { isConfirmed: true },
      { new: true }
    );

    if (!updatedOrder)
      return res.status(404).json({ message: 'Order not found' });

    res.status(200).json({ message: 'Order confirmed', order: updatedOrder });
  } catch (err) {
    res.status(500).json({ message: 'Error confirming order', error: err.message });
  }
};
