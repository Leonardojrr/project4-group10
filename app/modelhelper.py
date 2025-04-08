import pandas as pd
import pickle

class ModelHelper():
    def __init__(self):
        # model
        self.model = pickle.load(open("credit_model_pipeline.pkl", 'rb'))

    def predictions(self,distance_from_home,distance_from_last_transaction,ratio_to_median_purchase_price,repeat_retailer,used_chip,used_pin_number,online_order ):
        
        data_dict = {
            "distance_from_home": distance_from_home,
            "distance_from_last_transaction": distance_from_last_transaction,
            "ratio_to_median_purchase_price": ratio_to_median_purchase_price,
            "repeat_retailer": repeat_retailer,
            "used_chip": used_chip,
            "used_pin_number": used_pin_number,
            "online_order": online_order
        }

        df = pd.DataFrame(data_dict, index=[0])
        
        preds = self.model.predict_proba(df)
        return(preds[0][1])