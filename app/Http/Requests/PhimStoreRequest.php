<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PhimStoreRequest extends FormRequest
{

    public function authorize(): bool
    {
        //return false;
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
            return [
                'ten_phim' => 'required|string|max:255',
                'thumb' => 'required|string|max:255',
                'loai_phim' => 'required|boolean',
                'nam_id' => 'required|exists:nam,id',
                'quoc_gia_id' => 'required|exists:quoc_gia,id',
                'dien_vien' => 'required|string',
                'noi_dung' => 'required|string',
                'luot_xem' => 'required|integer',
                // 'the_loai_id' => 'required|array', // Phải là một mảng
                // 'the_loai_id' => 'required|exists:theloai,id', // Mỗi phần tử phải tồn tại
            ];
       
    }

    public function messages()
    {
        
            return [
             
                'ten_phim.required' => 'ten_phim is required',
                'thumb.required' => 'thumb is required',
                'loai_phim.required' => 'loai_phim is required',
                'nam_id.required' => 'nam_id is required',
                'quoc_gia_id.required' => 'quoc_gia_id is required',
                'dien_vien.required' => 'dien_vien is required',
                'noi_dung.required' => 'noi_dung is required',
                'luot_xem.required' => 'luot_xem is required',
                // 'the_loai_id.required' => 'luot_xem is required',
            ];
        
    }
}
